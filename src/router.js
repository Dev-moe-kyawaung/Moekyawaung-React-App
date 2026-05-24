// src/router.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Resume from './pages/Resume';
import CertificatesPage from './pages/CertificatesPage';
import ProjectsPage from './pages/ProjectsPage';
import AppCollectionPage from './pages/AppCollectionPage';
import GitHubCollectionsPage from './pages/GitHubCollectionsPage';
import LovableLinksPage from './pages/LovableLinksPage';
import MailCollectionsPage from './pages/MailCollectionsPage';
import Blog from './pages/Blog';
import ContactPage from './pages/ContactPage';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/resume', element: <Resume /> },
  { path: '/certificates', element: <CertificatesPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/app-collection', element: <AppCollectionPage /> },
  { path: '/github-collections', element: <GitHubCollectionsPage /> },
  { path: '/lovable-links', element: <LovableLinksPage /> },
  { path: '/mail-collections', element: <MailCollectionsPage /> },
  { path: '/blog', element: <Blog /> },
  { path: '/contact', element: <ContactPage /> },
]);
