import {matchesQuery, splitByQuery} from 'baseui/data-table/text-search';
import {useStyletron} from 'baseui';

export function StringCell(props) {
    const [css] = useStyletron();
    console.log(props);
    return (
        <div
            className={css({
                display: '-webkit-box',
                WebkitLineClamp: props.lineClamp || 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
            })}
            style={props.style}
            onClick={props.onClick}
        >
            {props.textQuery ? <HighlightCellText text={props.value} query={props.textQuery} /> : props.value}
        </div>
    );
}

export const HighlightCellText = (props) => {
    const [css, theme] = useStyletron();

    if (!props.query) {
        return <>props.text</>;
    }

    return (
        <>
            {splitByQuery(props.text, props.query).map((el, i) => {
                if (matchesQuery(el, props.query)) {
                    return (
                        <span className={css({...theme.typography.font150, backgroundColor: 'yellow'})} key={i}>
                            {el}
                        </span>
                    );
                }

                return el;
            })}
        </>
    );
};
