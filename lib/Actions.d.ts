import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
export interface ActionsProps {
    options?: {
        [key: string]: any;
    };
    optionTintColor?: string;
    icon?: () => ReactNode;
    wrapperStyle?: StyleProp<ViewStyle>;
    iconTextStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    onPressActionButton?(): void;
}
export default class Actions extends React.Component<ActionsProps> {
    static defaultProps: ActionsProps;
    static propTypes: {
        onSend: PropTypes.Requireable<(...args: any[]) => any>;
        options: PropTypes.Requireable<object>;
        optionTintColor: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<(...args: any[]) => any>;
        onPressActionButton: PropTypes.Requireable<(...args: any[]) => any>;
        wrapperStyle: PropTypes.Requireable<number | boolean | object>;
        containerStyle: PropTypes.Requireable<number | boolean | object>;
    };
    static contextType: React.Context<import("./GiftedChatContext").IGiftedChatContext>;
    onActionsPress: () => void;
    renderIcon(): {} | null | undefined;
    render(): JSX.Element;
}
