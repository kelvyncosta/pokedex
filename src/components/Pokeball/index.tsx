import { Component } from './styles';

interface IPokeballProps {
  size?: string;
  opacity?: number;
  isColorized?: boolean;
}

function Pokeball({
  size = '300px',
  opacity = 0.2,
  isColorized = false,
}: IPokeballProps): JSX.Element {
  return (
    <Component opacity={opacity}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 200.000000 200.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
          fill="#FFF"
          stroke="none"
        >
          <path
            fill={isColorized ? 'red' : '#FFF'}
            d="M832 1985 c-398 -72 -709 -363 -803 -750 -10 -44 -19 -88 -19 -97 0
-17 21 -18 313 -18 l312 1 24 52 c32 68 102 136 176 173 55 26 69 29 165 29
95 0 110 -3 163 -28 72 -36 148 -110 178 -176 l24 -50 313 -1 c291 0 312 1
312 18 0 9 -9 53 -19 97 -70 287 -272 538 -536 665 -185 88 -409 120 -603 85z"
          />
          <path
            fill={isColorized ? '#000' : '#FFF'}
            d="M921 1219 c-46 -14 -127 -97 -140 -145 -26 -93 -7 -169 57 -233 96
-95 228 -96 322 -1 95 94 94 226 -1 322 -64 64 -145 83 -238 57z"
          />
          <path
            d="M5 898 c55 -433 347 -765 765 -871 121 -30 339 -30 460 0 253 64 467
215 604 425 88 134 140 279 161 446 l7 52 -309 0 -309 0 -18 -60 c-76 -252
-382 -352 -596 -195 -60 44 -124 137 -140 204 l-12 51 -310 0 -310 0 7 -52z
m580 -85 c58 -134 201 -242 347 -262 208 -29 417 90 488 276 l18 48 241 3 242
2 -6 -37 c-58 -351 -332 -647 -684 -740 -120 -32 -312 -36 -430 -10 -321 73
-578 305 -679 612 -17 50 -33 109 -37 133 l-7 42 239 0 239 0 29 -67z"
          />
        </g>
      </svg>
    </Component>
  );
}

export { Pokeball };
