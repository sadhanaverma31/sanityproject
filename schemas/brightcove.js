import { Component } from "react";


const BrightcovePreview = ({value}) => {

return (
<div style="position: relative; display: block; max-width: 608px;"><div style="padding-top: 56.25%;"><iframe src="https://players.brightcove.net/1614493167001/npInroSPG5_default/index.html?videoId=6304707608001" allow="encrypted-media" style="position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; width: 100%; height: 100%;"></iframe></div></div>
)};

export default {

    name: 'brightcove',
    type: 'object',
    title: 'Brightcove Embed',
    fields:[
        {
            name: 'url',
            type:  'url',
            title: 'URL',

        }
    ],
    preview: {
        select: {
            url: 'url'
        },
        Component: BrightcovePreview,
    }
}