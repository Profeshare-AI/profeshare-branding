// Google Analytics 4 utility functions for event tracking

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: any) => void;
  }
}

// Track CTA button clicks
export const trackCTAClick = (buttonLabel: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'CTA',
      event_label: buttonLabel,
    });
  }
};

// Track survey link clicks
export const trackSurveyClick = (surveyType: string, userGroup?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'survey_click', {
      event_category: 'Engagement',
      event_label: surveyType,
      user_group: userGroup || 'Not specified',
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'Engagement',
      event_label: `${percentage}_percent`,
    });
  }
};