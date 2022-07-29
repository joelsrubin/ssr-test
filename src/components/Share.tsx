import Image from "next/image";

type TShareProps = {
  clickHandler: () => void;
};

export default function Share({ clickHandler }: TShareProps) {
  return (
    <button onClick={clickHandler}>
      <Image
        src="/share.svg"
        height={30}
        width={30}
        alt="share"
        className="cursor-pointer hover:scale-110 duration-200"
      />
    </button>
  );
}
