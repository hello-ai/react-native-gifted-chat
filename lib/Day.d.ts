import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { IMessage } from './Models';
export interface DayProps<TMessage extends IMessage> {
    currentMessage?: TMessage;
    nextMessage?: TMessage;
    previousMessage?: TMessage;
    containerStyle?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    dateFormat?: string;
    inverted?: boolean;
}
export default class Day<TMessage extends IMessage = IMessage> extends PureComponent<DayProps<TMessage>> {
    static contextType: React.Context<import("./GiftedChatContext").IGiftedChatContext>;
    static defaultProps: {
        currentMessage: {
            createdAt: null;
        };
        previousMessage: {};
        nextMessage: {};
        containerStyle: {};
        wrapperStyle: {};
        textStyle: {};
        dateFormat: string;
    };
    static propTypes: {
        currentMessage: PropTypes.Requireable<object>;
        previousMessage: PropTypes.Requireable<object>;
        nextMessage: PropTypes.Requireable<object>;
        inverted: PropTypes.Requireable<boolean>;
        containerStyle: PropTypes.Requireable<number | boolean | object>;
        wrapperStyle: PropTypes.Requireable<number | boolean | object>;
        textStyle: PropTypes.Requireable<number | boolean | object>;
        dateFormat: PropTypes.Requireable<string>;
    };
    render(): JSX.Element | null;
}
