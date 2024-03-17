import clsx from 'clsx';
import NextImage from 'next/image';

const Image = ({
    src,
    alt = '',
    width = undefined,
    height = undefined,
    blurDataURL = undefined,
    focus = '50% 50%',
    className = '',
    contain = false,
    noLazy = false,
    priority = false,
    ...props
}) => {
    return (
        <NextImage
            className={clsx(
                'image w-full h-full',
                contain ? 'object-contain' : 'object-cover',
                className
            )}
            style={{objectPosition: focus}}
            src={src}
            width={width}
            height={height}
            blurDataURL={blurDataURL}
            placeholder={blurDataURL ? 'blur' : 'empty'}
            alt={alt || ''}
            quality={90}
            sizes="(max-width: 480px) 80vw, (max-width: 640px) 80vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, (max-width: 1440px) 75vw, 100vw"
            loading={priority ? undefined : (noLazy ? 'eager' : 'lazy')}
            priority={priority}
            {...props}
        />
    );
};

export default Image;
