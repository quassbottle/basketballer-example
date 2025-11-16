import { twMerge } from "tailwind-merge";
import Typography from "../../ui/Typography";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price: number;
  description: string;
  discount?: number;
  imageUrl: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  className,
  price,
  description,
  discount,
  imageUrl,
  ...props
}) => {
  return (
    <>
      <div
        {...props}
        className={twMerge(
          "flex flex-col gap-5 pt-5 pb-6 shadow-card w-[270px] h-[417px]",
          className
        )}
      >
        <div className="bg-white flex flex-col justify-center items-center">
          <Typography variant="16px-bold">{title}</Typography>
          <img
            src={imageUrl}
            alt={title}
            className="mt-4 h-[200px] w-[190px] object-cover"
          />
          <Typography variant="11px-regular" className="pl-4 pr-4 text-center">
            {description}
          </Typography>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex items-start gap-2 pl-[30px]">
            <Typography
              variant="18px-semibold"
              className="leading-none mt-[20px]"
              color="primary"
              type="span"
            >
              {price - (discount ?? 0)} руб.
            </Typography>

            <Typography
              variant="18px-semibold"
              className="line-through"
              color="secondary"
              type="span"
            >
              {price} руб.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
