import React from 'react';
import $ from "jquery";
import PropTypes from "prop-types";

/**
 * FoldingPanel stateless component
 */
const FoldingPanel = ({ onFoldingPanelToggle }) => {

    /**
     * Closes the folding panel
     * @param event DOM event with information about element clicked
     * */
    function closeFoldingPanel(event){
        event.preventDefault();
        $('.cd-folding-panel').removeClass("is-open");

        onFoldingPanelToggle(false);
    }

    return (
        <div className="cd-folding-panel">
            <div className="fold-left"/>

            <div className="fold-right"/>

            <div className="cd-fold-content">
                {/*Content will be filled using JS*/}
            </div>
            <a className="cd-close" href="#0" onClick={closeFoldingPanel}/>
        </div>
    );
};

/**
 * Folding panel prop types
 * */
FoldingPanel.propTypes = {
   onFoldingPanelToggle : PropTypes.func.isRequired
};

export default FoldingPanel;