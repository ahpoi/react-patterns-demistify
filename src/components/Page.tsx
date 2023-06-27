import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const Page = (props: BoxProps) => (
    <Box
        height={'auto'}
        minHeight={'100%'}
        width={'100%'}
        display={'flex'}
        flex={1}
        flexDirection={'column'}
        {...props}
    />
);

export const PageHeader = (props: BoxProps) => (
    <Box
        as={'header'}
        width={'100%'}
        maxW={'container.lg'}
        margin={'0 auto'}
        {...props}
    />
);

export const PageMainBody = (props: BoxProps) => (
    <Box
        as={'main'}
        height={'100%'}
        width={'100%'}
        display={'flex'}
        flexDirection={'column'}
        flexBasis={'auto'}
        flexShrink={0}
        flex={'1 1 auto'}
        margin={'0 auto'}
        maxW={'container.lg'}
        {...props}
    />
);

export const PageFooter = (props: BoxProps) => (
    <Box
        as={'footer'}
        width={'100%'}
        maxW={'container.lg'}
        margin={'0 auto'}
        {...props}
    />
);
