export declare type breakpointNames = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export interface BreakpointValue {
  breakpointName: breakpointNames;
  value: string;
}
export declare type settableProps = 'columns' | 'spacing' | 'gutter-x' | 'gutter-y' | 'size' | 'offset';
export interface SetProp {
  propName: settableProps;
  breakpointValues: BreakpointValue[];
}
