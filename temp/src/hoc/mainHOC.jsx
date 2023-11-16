/*
 *
 */

function mainHOC (OriginalComponent) {
    return function NewComponent () {
        return (
            <div>
                <h2 >Assignment</h2>
                <OriginalComponent />
            </div>
        )
    }
}

export default mainHOC;