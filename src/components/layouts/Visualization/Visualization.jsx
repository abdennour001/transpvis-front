import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import "./_visualization.scss";
import { chart } from "../../../utils/d3";

import { select } from "d3";

const Visualization = ({
    application,
    stakeholder,
    informationElement,
    relationship
}) => {
    const svgRef = useRef(null);

    const drawViz = ({ nodes, links }) => {
        const svg = select(svgRef.current);

        chart(svg, { nodes, links });
    };

    const getVizData = () => {
        let data = {};
        data.nodes = [];
        data.links = [];
        stakeholder.stakeholders.forEach(stakeholder => {
            data.nodes.push({
                id: stakeholder.id,
                label: stakeholder.label,
                name: stakeholder.name,
                group: "stakeholder",
                weight: stakeholder.weight
            });
        });
        informationElement.informationElements.forEach(ie => {
            data.nodes.push({
                id: ie.id,
                label: ie.label,
                name: ie.name,
                group: ie.type,
                weight: ie.weight
            });
        });
        relationship.relations
            .map(relation => {
                return {
                    id: relation.id,
                    type: relation.type,
                    stakeholder: stakeholder.stakeholders.find(s => {
                        return s.id === relation.stakeholder;
                    }),
                    information_element: informationElement.informationElements.find(
                        ie_ => {
                            return ie_.id === relation.information_element;
                        }
                    )
                };
            })
            .forEach(relation => {
                data.links.push({
                    source: ["production"].includes(relation.type)
                        ? relation.stakeholder.label
                        : relation.information_element.label,
                    target: ["production"].includes(relation.type)
                        ? relation.information_element.label
                        : relation.stakeholder.label,
                    type: relation.type
                });
            });
        informationElement.informationElements.forEach(ie => {
            if (ie.information_elements.length !== 0) {
                ie.information_elements.forEach(ie_ => {
                    data.links.push({
                        source: informationElement.informationElements.find(
                            ie__ => {
                                return ie__.id === ie_;
                            }
                        ).label,
                        target: ie.label,
                        type: "uses"
                    });
                });
            }
        });
        return data;
    };

    useEffect(() => {
        if (
            stakeholder.stakeholders &&
            informationElement.informationElements &&
            relationship.relations
        ) {
            const data = getVizData();
            drawViz(data);
        }
    }, [
        stakeholder.stakeholders,
        informationElement.informationElements,
        relationship.relations
    ]);

    // return <div>Hello 👋, I am a Visualization component.</div>;
    return <svg ref={svgRef}></svg>;
};

const mapSateToProps = state => ({
    application: state.application,
    stakeholder: state.stakeholder,
    informationElement: state.informationElement,
    relationship: state.relationship
});

export default connect(mapSateToProps)(Visualization);
