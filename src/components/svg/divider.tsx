type props = {
  rotate?: boolean;
  top?: boolean;
  offsetTop?: boolean;
  offsetBottom?: boolean;
}
export const DividerSVG = ({ rotate, top, offsetTop, offsetBottom }: props) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      className={`absolute w-full h-5 md:h-10 z-20
        ${rotate ? 'rotate-180' : ''} ${top ? '-top-0.5' : '-bottom-0.5'}
        ${offsetTop ? `-top-5 md:-top-10` : ''}
        ${offsetBottom ? `-bottom-5 md:-bottom-10` : ''}
      `}
    >
      <path d="m0 4 150 40h160l190 50 190-50h160l150-40V0H0v4z" fill="#7C4D34"></path>
    </svg>
  )
}