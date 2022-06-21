import React from 'react';

type Props = {
  name: string;
};

const Indicator = ({ name }: Props) => {
  return (
    <div
      className='absolute text-2xl xl:text-3xl uppercase  text-slate-300 left-0 translate-x-[-250%] xl:translate-x-[-80px] translate-y-[-150px] z-10 before:border-[0.5px]  before:h-[200px] flex items-center gap-6  before:border-slate-200 tracking-widest  before:bg-slate-200 before:block font-extralight '
      style={{ writingMode: 'vertical-lr' }}
    >
      <span style={{ whiteSpace: 'nowrap' }}>{name}</span>
    </div>
  );
};

export default Indicator;
