import * as React from 'react';
interface AlertProps {
    customClass?: string;
    headline: string;
    icon?: string;
    opened: boolean;
    size?: string;
    theme?: string;
    timeout?: boolean | number;
    variant?: string;
}
declare const Alert: React.FunctionComponent<AlertProps>;
interface BadgeProps {
    customClass?: string;
    link?: string;
    pill?: boolean;
    size?: string;
    variant?: string;
}
declare const Badge: React.FunctionComponent<BadgeProps>;
interface ButtonProps {
    customClass?: string;
    deselected?: boolean;
    disabled?: boolean;
    size?: string;
    theme?: string;
    variant?: string;
}
declare const Button: React.FunctionComponent<ButtonProps>;
interface CardProps {
    customClass?: string;
    deselected?: boolean;
    disabled?: boolean;
    imageTop?: string;
    imageTopAlt?: string;
    size?: string;
    theme?: string;
    variant?: string;
}
declare const Card: React.FunctionComponent<CardProps>;
interface CarouselProps {
    vertical?: boolean;
}
declare const Carousel: React.FunctionComponent<CarouselProps>;
interface DividerProps {
    customClass?: string;
    size?: string;
    theme?: string;
    vertical?: boolean;
}
declare const Divider: React.FunctionComponent<DividerProps>;
interface IconProps {
    customClass?: string;
    name: string;
    path: string;
    theme?: string;
}
declare const Icon: React.FunctionComponent<IconProps>;
interface InputProps {
    customClass?: string;
    errorMessage?: string;
    name?: string;
    theme?: string;
    type?: 'email' | 'hidden' | 'number' | 'password' | 'tel' | 'text' | 'url';
    value: string;
}
declare const Input: React.FunctionComponent<InputProps>;
interface InputErrorProps {
    customClass?: string;
    theme?: string;
}
declare const InputError: React.FunctionComponent<InputErrorProps>;
interface InputGroupProps {
    customClass?: string;
    theme?: string;
}
declare const InputGroup: React.FunctionComponent<InputGroupProps>;
interface InputLabelProps {
    customClass?: string;
    theme?: string;
}
declare const InputLabel: React.FunctionComponent<InputLabelProps>;
interface LinkProps {
    customClass?: string;
    disabled?: boolean;
    href?: string;
    openNewTab?: boolean;
    underline?: boolean;
    variant?: string;
}
declare const Link: React.FunctionComponent<LinkProps>;
interface ModalProps {
    customClass?: string;
    opened?: boolean;
    size?: string;
    theme?: string;
    variant?: string;
}
declare const Modal: React.FunctionComponent<ModalProps>;
interface ProgressBarProps {
    customClass?: string;
    percentage: number;
    showText?: boolean;
    strokeWidth?: number;
    textInside?: boolean;
    variant?: string;
}
declare const ProgressBar: React.FunctionComponent<ProgressBarProps>;
interface SliderProps {
    customClass?: string;
    label: boolean;
    max?: number;
    min?: number;
    step: number;
    value: number;
}
declare const Slider: React.FunctionComponent<SliderProps>;
interface SwitchProps {
    active?: boolean;
    customClass?: string;
    disabled?: boolean;
    theme?: string;
}
declare const Switch: React.FunctionComponent<SwitchProps>;
interface TagProps {
    customClass?: string;
    link?: string;
    pill?: boolean;
    theme?: string;
    variant?: string;
}
declare const Tag: React.FunctionComponent<TagProps>;
interface TextProps {
    customClass?: string;
    theme?: string;
}
declare const Text: React.FunctionComponent<TextProps>;
interface ToastProps {
    animated?: boolean;
    autoHide?: boolean | number;
    customClass?: string;
    fadeDuration?: number;
    opened?: boolean;
    positionRight?: number;
    positionTop?: number;
    size?: string;
    theme?: string;
    time?: number;
    variant?: string;
}
declare const Toast: React.FunctionComponent<ToastProps>;
export { Alert, Badge, Button, Card, Carousel, Divider, Icon, Input, InputError, InputGroup, InputLabel, Link, Modal, ProgressBar, Slider, Switch, Tag, Text, Toast };
