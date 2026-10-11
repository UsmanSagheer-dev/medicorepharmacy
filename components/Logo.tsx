import { IMAGES } from '@/public/assets/images';
import Link from 'next/link';

export function Logo() {
  return (
    <Link
      className="flex items-center gap-2.5"
      href="/"
      aria-label="Medicore Pharmacy home"
    >
     <img src={IMAGES.logo.src} alt="Medicore Pharmacy" className="h-10 w-auto rounded-full" />
      <span className="flex flex-col leading-none">
        <b className="text-base tracking-tight">Medicore</b>
        <small className="mt-1 text-[8px] font-extrabold tracking-[0.18em] text-blue-600">
          PHARMACY
        </small>
      </span>
    </Link>
  )
}
