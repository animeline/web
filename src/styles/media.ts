import { generateMedia } from 'styled-media-query';

export const media = generateMedia({
  smallPhone: '400px',
  phone: '500px',
  bigPhone: '620px',
  smallTablet: '720px',
  tablet: '800px',
  smallDesktop: '980px',
  hd: '1366px',
});
