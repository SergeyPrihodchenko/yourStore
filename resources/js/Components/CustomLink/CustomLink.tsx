import { Link, InertiaLinkProps } from '@inertiajs/react';
import cn from 'classnames';
import s from './CustomLink.module.css';

export enum VariantLink{
    DEFAULT = 'default',
    PRIMARY = 'primary'
}
interface CustomLinkProps extends InertiaLinkProps{
    active: boolean;
    className?: string;
    variant: VariantLink;
}
export default function CustomLink(props: CustomLinkProps) {
    const {active, className, children, variant=VariantLink.DEFAULT, ...otherProps} =props;
    return (
        <Link
            {...otherProps}
            className={cn(s[variant],
                {
                    [s.active]: active
                }, className
            )
            }
        >
            {children}
        </Link>
    );
}
