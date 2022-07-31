import Image from "next/image";

type TShareProps = {
  clickHandler: () => void;
  img: string;
  alt: string;
};

export default function Icon({ clickHandler, img, alt }: TShareProps) {
  return (
    <button onClick={clickHandler}>
      <Image
        src={img}
        height={30}
        width={30}
        alt={alt}
        className="cursor-pointer hover:scale-110 duration-200 px-4"
        title={alt}
      />
    </button>
  );
}
