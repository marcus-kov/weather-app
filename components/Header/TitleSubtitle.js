import React from "react";

// eslint-disable-next-line react/display-name
export const TitleSubtitle = React.memo(() => {
  return (
    <div className="lg:text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
        Weather Hero
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        A better way to predict weather
      </p>
    </div>
  );
});
