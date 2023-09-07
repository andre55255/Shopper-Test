import {
    LoadingArea,
    LoadingContainer,
    Spinner,
    SpinnerContainer,
} from "./styled";

type LoadingProps = {
    isFetching: boolean;
    isArea?: boolean;
};

export default function Loading({ isFetching, isArea }: LoadingProps) {
    if (isFetching && isArea) {
        return (
            <LoadingContainer>
                <LoadingArea />
            </LoadingContainer>
        );
    } else if (isFetching && !isArea) {
        return (
            <SpinnerContainer>
                <Spinner />
            </SpinnerContainer>
        );
    } else {
        return <></>;
    }
}
