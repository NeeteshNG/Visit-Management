import Image from 'next/image';
import ngtryLogoPng from './ngtry-logo.png';

// NGtry Logo Component - for light backgrounds (main content areas, auth pages)
export function NGtryLogo({ width = 120, height = 50, className = '', style = {} }) {
  return (
    <Image
      src={ngtryLogoPng}
      alt="NGtry Logo"
      width={style.width ? parseInt(style.width) : width}
      height={style.height ? parseInt(style.height) : height}
      className={className}
      priority
    />
  );
}

// NGtry Logo White Component - for dark backgrounds (sidebar)
// Using CSS filter to invert colors for visibility on dark backgrounds
export function NGtryLogoWhite({ width = 120, height = 50, className = '' }) {
  return (
    <Image
      src={ngtryLogoPng}
      alt="NGtry Logo"
      width={width}
      height={height}
      className={`brightness-0 invert ${className}`}
      priority
    />
  );
}
