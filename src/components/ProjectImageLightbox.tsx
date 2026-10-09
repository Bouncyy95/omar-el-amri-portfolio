import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from './Projects';

export function ProjectImageLightbox({ project, onClose }: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-label={`${project.title} photo`}
      onClose={onClose}
      onClick={event => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
      className="project-image-dialog fixed inset-0 m-0 h-dvh w-screen max-h-none max-w-none border-0 bg-black/90 p-4 pt-20 sm:p-10 sm:pt-20 backdrop:bg-black/80 open:flex items-center justify-center"
    >
      <button
        type="button"
        autoFocus
        onClick={() => dialogRef.current?.close()}
        aria-label="Close expanded photo"
        className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/70 px-4 py-2 text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
      >
        Close ✕
      </button>
      <img
        src={project.image}
        alt={project.title}
        className="max-h-full max-w-full object-contain"
      />
    </dialog>,
    document.body,
  );
}
