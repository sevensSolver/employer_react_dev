/* eslint-disable no-undef */

export const baseUrl =
  process.env.REACT_APP_VERCEL_ENV === 'production'
    ? 'https://service.edencaremedical.com/prod/api/v1'
    : process.env.REACT_APP_QA_URL === 'QA'
    ? 'https://service.edencaremedical.com/qa/api/v1'
    : 'https://service.edencaremedical.com/dev/api/v1';

export const titleUrl = 'Employer Portal | Eden Care';
