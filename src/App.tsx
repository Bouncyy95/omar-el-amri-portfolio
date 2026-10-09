import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Modals, ModalType } from './components/Modals';
import { ExploreIndicator } from './components/ExploreIndicator';
import { TopProgressBar } from './components/TopProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { Sections } from './components/Sections';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4';
const SENSITIVITY = 0.8;

function AppContent() {
  const { isPaper } = useTheme();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const prevXRef = useRef<number | null>(null);
  const scrubTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isScrubbing, setIsScrubbing] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [loadProgress, setLoadProgress] = useState<number>(15);
  const [isAssetsReady, setIsAssetsReady] = useState<boolean>(false);

  // Video seeking handler to queue next seek if targetTime moved
  const handleSeeked = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) {
      isSeekingRef.current = false;
      return;
    }

    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.03) {
      video.currentTime = targetTimeRef.current;
    } else {
      isSeekingRef.current = false;
    }
  }, []);

  // Toggle ambient playback
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays on mount (muted videos are allowed by all modern browsers)
    const startPlayback = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Fallback if browser requires user interaction
          setIsPlaying(false);
        });
    };

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
        targetTimeRef.current = video.currentTime || 0;
      }
      startPlayback();
    };

    const handleTimeUpdate = () => {
      if (!isSeekingRef.current && video) {
        setCurrentTime(video.currentTime);
        targetTimeRef.current = video.currentTime;
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    const updateBufferProgress = () => {
      if (!video) return;
      if (video.duration && !isNaN(video.duration) && video.buffered.length > 0) {
        let maxBuffered = 0;
        for (let i = 0; i < video.buffered.length; i++) {
          if (video.buffered.end(i) > maxBuffered) {
            maxBuffered = video.buffered.end(i);
          }
        }
        const percent = Math.min(100, Math.round((maxBuffered / video.duration) * 100));
        setLoadProgress((prev) => Math.max(prev, percent));
        if (percent >= 95) {
          setIsAssetsReady(true);
        }
      }
    };

    const handleCanPlay = () => {
      updateBufferProgress();
      setLoadProgress((prev) => Math.max(prev, 75));
    };

    const handleCanPlayThrough = () => {
      setLoadProgress(100);
      setIsAssetsReady(true);
    };

    const performScrub = (delta: number) => {
      if (!video || !video.duration || isNaN(video.duration)) return;

      setIsScrubbing(true);

      // Pause ambient playback during active mouse scrubbing
      if (!video.paused) {
        video.pause();
      }

      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      let nextTarget = targetTimeRef.current + timeOffset;
      nextTarget = Math.max(0, Math.min(video.duration, nextTarget));
      targetTimeRef.current = nextTarget;
      setCurrentTime(nextTarget);

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = nextTarget;
      }

      // Resume ambient play after scrubbing pauses for 800ms
      if (scrubTimeoutRef.current) {
        clearTimeout(scrubTimeoutRef.current);
      }
      scrubTimeoutRef.current = setTimeout(() => {
        setIsScrubbing(false);
        if (videoRef.current && isPlaying) {
          videoRef.current.play().catch(() => {});
        }
      }, 800);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!video || !video.duration || isNaN(video.duration)) {
        prevXRef.current = e.clientX;
        return;
      }

      if (prevXRef.current === null) {
        prevXRef.current = e.clientX;
        return;
      }

      const delta = e.clientX - prevXRef.current;
      prevXRef.current = e.clientX;

      performScrub(delta);
    };

    const handleMouseLeave = () => {
      prevXRef.current = null;
    };

    // Touch support for mobile scrubbing
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        prevXRef.current = e.touches[0].clientX;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!video || !video.duration || isNaN(video.duration)) {
        if (e.touches.length > 0) prevXRef.current = e.touches[0].clientX;
        return;
      }

      if (e.touches.length > 0) {
        const currentX = e.touches[0].clientX;
        if (prevXRef.current === null) {
          prevXRef.current = currentX;
          return;
        }

        const delta = currentX - prevXRef.current;
        prevXRef.current = currentX;

        performScrub(delta);
      }
    };

    const handleTouchEnd = () => {
      prevXRef.current = null;
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('progress', updateBufferProgress);
    video.addEventListener('loadeddata', updateBufferProgress);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('canplaythrough', handleCanPlayThrough);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Initial check
    if (video.readyState >= 1) {
      handleLoadedMetadata();
      updateBufferProgress();
    }
    if (video.readyState >= 3) {
      setLoadProgress(100);
      setIsAssetsReady(true);
    }

    return () => {
      if (scrubTimeoutRef.current) clearTimeout(scrubTimeoutRef.current);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('progress', updateBufferProgress);
      video.removeEventListener('loadeddata', updateBufferProgress);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);

      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleSeeked, isPlaying]);

  return (
    <div
      className={`relative w-full min-h-screen overflow-x-hidden font-body select-text scroll-smooth transition-colors duration-500 ${
        isPaper ? 'theme-paper bg-[#faf9f5] text-[#111113]' : 'theme-deep-space bg-black text-white'
      }`}
    >
      {/* Minimalist Top Progress Bar for video loading */}
      <TopProgressBar progress={loadProgress} isReady={isAssetsReady} />

      {/* BACKGROUND VIDEO (mouse-scrub controlled + ambient autoplay) */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onSeeked={handleSeeked}
        className={`w-full h-full pointer-events-none select-none transition-all duration-700 ${
          isPaper ? 'opacity-30 mix-blend-multiply filter contrast-125' : 'opacity-100'
        }`}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          objectFit: 'cover',
          objectPosition: '70% center',
        }}
      />

      {/* Subtle atmospheric vignette scrim to ensure legible contrast */}
      <div
        className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-500 ${
          isPaper ? 'bg-[#faf9f5]/80' : 'bg-black/25'
        }`}
        aria-hidden="true"
      />

      {/* NAVBAR (fixed, z-index: 20) */}
      <Navbar onOpenModal={setActiveModal} />

      {/* HERO SECTION (z-index: 1) */}
      <main>
        <Hero />
      </main>

      {/* Scroll to Explore indicator at bottom center */}
      <ExploreIndicator />

      {/* DETAILED CONTENT SECTIONS (About, Projects, Skills, Education, Contact) */}
      <Sections onOpenModal={setActiveModal} />

      {/* Interactive Modals */}
      <Modals activeModal={activeModal} onClose={() => setActiveModal(null)} />

      {/* Custom Circular Cursor */}
      <CustomCursor />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
