// Simple utility functions for the IBM Qiskit Fall Fest application

/**
 * Safe external link opener with error handling
 */
export const openExternalLink = (url: string, fallbackMessage?: string) => {
  try {
    if (url && url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      console.warn('Invalid URL provided:', url);
      if (fallbackMessage) {
        alert(fallbackMessage);
      }
    }
  } catch (error) {
    console.error('Error opening external link:', error);
    if (fallbackMessage) {
      alert(fallbackMessage);
    }
  }
};

/**
 * Format time with proper timezone display
 */
export const formatEventTime = (timeString: string): string => {
  return `${timeString} (Indian Standard Time)`;
};

/**
 * Check if the event has started
 */
export const hasEventStarted = (eventDate: string): boolean => {
  const now = new Date();
  const event = new Date(eventDate);
  return now >= event;
};

/**
 * Calculate days until event
 */
export const getDaysUntilEvent = (eventDate: string): number => {
  const now = new Date();
  const event = new Date(eventDate);
  const timeDiff = event.getTime() - now.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

/**
 * Smooth scroll to a section by ID
 */
export const scrollToSection = (sectionId: string): void => {
  try {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    } else {
      console.warn(`Section with ID '${sectionId}' not found`);
    }
  } catch (error) {
    console.error('Error scrolling to section:', error);
  }
};

/**
 * Scroll to top of the page
 */
export const scrollToTop = (): void => {
  try {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } catch (error) {
    console.error('Error scrolling to top:', error);
  }
};