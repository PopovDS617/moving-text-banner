import React from 'react';

const Banner = (props: any) => {
  const { movingText } = props;
  const fontSize = 10;
  const textList = [];
  for (let i = fontSize; i <= 510; i += fontSize) {
    const sliceStart: number = Math.ceil(Math.random() * 50);

    textList.push(
      <text
        key={Math.random() * 50}
        x="0"
        y={(i += 6)}
        fontSize={fontSize + 'px'}
        fontFamily="monospace"
        dominantBaseline="hanging"
      >
        {movingText.slice(sliceStart, sliceStart + fontSize * 20)}
      </text>
    );
  }

  return (
    <svg
      id="bannerSVG"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 15 200 500"
      preserveAspectRatio="xMinYMid meet"
      fill="currentColor"
      height="100%"
      width="100%"
    >
      {textList}
    </svg>
  );
};

export default Banner;
