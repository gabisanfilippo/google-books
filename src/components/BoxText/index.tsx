import {ReactNode, FC} from 'react'

interface IBoxText {
  children: ReactNode;
}

export const BoxText: FC<IBoxText> = ({ children }) => {
  return (
    <div
      className={`bg-gray-600 rounded-3xl relative mt-2 ml-2 max-w-lg py-4 px-8 w-full`}
    >
      <div className="invisible">{children}</div>
      <div className="bg-white rounded-3xl border-2 border-gray-950 border-dashed py-4 px-8 max-w-lg w-full absolute bottom-2 right-2">
        {children}
      </div>
    </div>
  );
};