import store from "../redux/store";
import { setRoot } from "../redux/actions/vizActions";
import { setFocused, removeFocused } from "../redux/actions/applicationActions";
import { SET_FOCUSED, REMOVE_FOCUSED } from "../redux/types";

export const d3 = require("d3");

const colornone = "#ccc";

var colorStakeholder = "#4A6FA5";
var colorData = "#FFDA0A";
var colorProcess = "#61C9A8";
var colorPolicy = "#FB5012";

export function setPrimaryAnimation(event, d) {
    const config = store.getState().config;

    const text = d3.select(d.text);
    text.attr("font-weight", "bold");
    text.transition()
        .duration(200)
        .ease(d3.easeLinear)
        .attr("font-size", +config.textSize + 0.5);
    text.style(
        "fill",
        eval(
            `color${d.data.group.charAt(0).toUpperCase() +
                d.data.group.slice(1)}`
        )
    );
    d3.selectAll(d.incoming.map(d => d.path))
        .data(d.incoming.map(d => d[0]))
        .attr("stroke", t =>
            eval(
                `color${t.data.group.charAt(0).toUpperCase() +
                    t.data.group.slice(1)}`
            )
        )
        .attr("stroke-width", 1.5)
        .attr("stroke-dasharray", 1500 + " " + 1500)
        .attr("stroke-dashoffset", 1500)
        .transition()
        .duration(1500)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);
    d3.selectAll(d.outgoing.map(d => d.path))
        .attr(
            "stroke",
            eval(
                `color${d.data.group.charAt(0).toUpperCase() +
                    d.data.group.slice(1)}`
            )
        )
        .attr("stroke-width", 1.5)
        .attr("stroke-width", 1.5)
        .attr("stroke-dasharray", 1500 + " " + 1500)
        .attr("stroke-dashoffset", 1500)
        .transition()
        .duration(1500)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);
    const textsOutgoing = d3.selectAll(d.outgoing.map(([, d]) => d.text));
    textsOutgoing.attr("font-weight", "bold");
    textsOutgoing
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .attr("font-size", +config.textSize + 0.5);
    const textsIncoming = d3.selectAll(d.incoming.map(d => d[0].text));
    textsIncoming.attr("font-weight", "bold");
    textsIncoming
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .attr("font-size", +config.textSize + 0.5);

    const root = store.getState().viz.root;
    d3.selectAll(
        root
            .leaves()
            .filter(node => node.data.label !== d.data.label)
            .filter(node => !d.outgoing.map(d => d[1]).includes(node))
            .filter(node => !d.incoming.map(d => d[0]).includes(node))
            .map(node => node.text)
    )
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .style("opacity", ".3");
    d3.selectAll(
        root
            .leaves()
            .map(node =>
                node.incoming
                    .map(n => n.path)
                    .concat(node.incoming.map(n => n.path))
            )
            .flat()
            .filter(
                path =>
                    !d.incoming.map(d => d.path).includes(path) &&
                    !d.outgoing.map(d => d.path).includes(path)
            )
    )
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .style("opacity", ".3");

    d3.selectAll(
        root
            .leaves()
            .filter(node => node.data.label !== d.data.label)
            .filter(node => !d.outgoing.map(d => d[1]).includes(node))
            .filter(node => !d.incoming.map(d => d[0]).includes(node))
            .map(node => node.circle)
    )
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .style("opacity", ".5")
        .attr("r", 6); // set the radius

    d3.select(d.circle)
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .attr("r", 10); // set the radius
    d3.selectAll(d.outgoing.map(d => d[1].circle))
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .attr("r", 10); // set the radius
    d3.selectAll(d.incoming.map(d => d[0].circle))
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .attr("r", 10); // set the radius
}

export function unsetPrimaryAnimation(event, d) {
    const config = store.getState().config;
    d3.select(d.text).attr("font-weight", "normal");
    d3.select(d.text).style("fill", "#3D4758");

    d3.selectAll(d.incoming.map(d => d.path))
        .attr("stroke", null)
        .attr("stroke-width", 1);

    d3.selectAll(d.incoming.map(([d]) => d.text))
        .attr("fill", null)
        .attr("font-weight", null);
    d3.selectAll(d.outgoing.map(d => d.path))
        .attr("stroke", null)
        .attr("stroke-width", 1);

    d3.selectAll(d.outgoing.map(([, d]) => d.text))
        .attr("fill", null)
        .attr("font-weight", null);
    d3.selectAll(d.incoming.map(d => d[0].text)).attr("font-weight", "normal");

    const root = store.getState().viz.root;
    const texts = d3.selectAll(root.leaves().map(node => node.text));
    texts
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .attr("font-size", +config.textSize);
    texts
        .transition()
        .delay(200)
        .duration(200)
        .ease(d3.easeLinear)
        .style("opacity", 1);

    d3.selectAll(
        root
            .leaves()
            .map(node => node.incoming.map(n => n.path))
            .flat()
    )
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .style("opacity", "1");
    d3.selectAll(
        root
            .leaves()
            .map(node => node.outgoing.map(n => n.path))
            .flat()
    )
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .style("opacity", "1");

    d3.selectAll(
        root
            .leaves()
            .filter(node => node.data.label !== d.data.label)
            .filter(node => !d.outgoing.map(d => d[1]).includes(node))
            .filter(node => !d.incoming.map(d => d[0]).includes(node))
            .map(node => node.circle)
    )
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .style("opacity", "1")
        .attr("r", 8); // set the radius

    d3.select(d.circle)
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .attr("r", 8); // set the radius
    d3.selectAll(d.outgoing.map(d => d[1].circle))
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .attr("r", 8); // set the radius
    d3.selectAll(d.incoming.map(d => d[0].circle))
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .attr("r", 8); // set the radius
}

// Primary animation (onClick)
export function clicked(event, d) {
    let element = {};
    if (d.data.group === "stakeholder") {
        element = store
            .getState()
            .stakeholder.stakeholders.find(
                element => element.label === d.data.label
            );
    } else {
        element = store
            .getState()
            .informationElement.informationElements.find(
                element => element.label === d.data.label
            );
    }
    if (!store.getState().application.focused) {
        setPrimaryAnimation(event, d);
        store.dispatch({
            type: SET_FOCUSED,
            payload: element
        });
    } else {
        if (store.getState().application.focused === element) {
            unsetPrimaryAnimation(event, d);
            store.dispatch({
                type: REMOVE_FOCUSED
            });
        } else {
            unsetPrimaryAnimation(
                event,
                store
                    .getState()
                    .viz.root.leaves()
                    .find(
                        node =>
                            node.data.label ===
                            store.getState().application.focused.label
                    )
            );
            setTimeout(() => {
                setPrimaryAnimation(event, d);
            }, 400);
            store.dispatch({
                type: SET_FOCUSED,
                payload: element
            });
        }
    }
}

//change link style based on the event(mouseover) Secondary animation
export function overed(event, d) {
    return null;
}

//in outed state, made everything reseted
export function outed(event, d) {
    return null;
}

const handleRotateText = d => {
    if (d.x >= Math.PI) {
        if (d.x > Math.PI && d.x < (3 * Math.PI) / 2 - 0.5) {
            return "rotate(-180)";
        } else {
            return "rotate(-180)";
        }
    } else {
        if (d.x > Math.PI / 2 + 0.5 && d.x < (3 * Math.PI) / 2) {
            return null;
        } else {
            return null;
        }
    }
};

export const chart = (svg, { nodes, links }) => {
    const config = store.getState().config;

    function degrees_to_radians(degrees) {
        var pi = Math.PI;
        return degrees * (pi / 180);
    }

    const radius = config.radius;
    const tree = d3.cluster().size([degrees_to_radians(config.extent), radius]);

    const line = d3
        .lineRadial()
        .curve(d3.curveBundle.beta(config.tension))
        .radius(d => d.y)
        .angle(d => d.x);

    const width = 1100;

    function bilink(root) {
        const map = new Map(root.leaves().map(d => [d.data.label, d]));
        for (const d of root.leaves()) {
            d.incoming = [];
            d.outgoing = d.data.targets.map(i => [d, map.get(i)]);
        }
        for (const d of root.leaves()) {
            for (const o of d.outgoing) {
                o[1].incoming.push(o);
            }
        }
        return root;
    }

    const data_ = ({ nodes, links }) => {
        const groupById = new Map();
        const nodeById = new Map(nodes.map(node => [node.label, node]));

        for (const node of nodes) {
            let group = groupById.get(node.group);
            if (!group) {
                groupById.set(
                    node.group,
                    (group = { label: node.group, children: [] })
                );
            }
            group.children.push(node);
            node.targets = [];
        }

        for (const { source: sourceId, target: targetId } of links) {
            nodeById.get(sourceId).targets.push(targetId);
        }

        return { children: [...groupById.values()] };
    };

    const findStartAngle = children => {
        if (children[0].x > children[children.length - 1].x) {
            return config.extent >= 300
                ? children[children.length - 1].x + 2 * Math.PI + 0.3
                : children[children.length - 1].x + 2 * Math.PI + 0.1;
        }

        var min = children[0].x;
        children.forEach(function(d) {
            if (d.x < min) min = d.x;
        });
        return config.extent >= 300 ? min - 0.3 : min - 0.1;
    };

    const findEndAngle = children => {
        if (children[0].x > children[children.length - 1].x) {
            return config.extent >= 300
                ? children[0].x - 0.3
                : children[0].x - 0.1;
        }

        var max = children[0].x;
        children.forEach(function(d) {
            if (d.x > max) max = d.x;
        });
        return config.extent >= 300 ? max + 0.3 : max + 0.1;
    };

    const rotateViz = (deg, root) => {
        root.x += degrees_to_radians(deg) % (2 * Math.PI);
        root.x %= 2 * Math.PI;
        root.children.map(element => {
            element.x += degrees_to_radians(deg);
            element.x %= 2 * Math.PI;
            element.children.map(node => {
                node.x += degrees_to_radians(deg) % (2 * Math.PI);
                node.x %= 2 * Math.PI;
                return node;
            });
            return element;
        });
        return root;
    };

    const data = data_({ nodes, links });

    const nodeById = new Map(nodes.map(node => [node.label, node]));

    let root = tree(
        bilink(
            d3
                .hierarchy(data)
                .sort(
                    (a, b) =>
                        d3.ascending(a.height, b.height) ||
                        d3.ascending(a.data.label, b.data.label)
                )
        )
    );
    root = rotateViz(config.rotate, root);
    setRoot(root, store.dispatch);
    svg.attr("viewBox", [-width / 2 + 30, -width / 2, width, width]);

    // 🏛
    const arcWidth = 10;
    const arc = d3
        .arc()
        .innerRadius(+radius + 6 - arcWidth)
        .outerRadius(+radius + 6 + arcWidth)
        .startAngle(d => findStartAngle(d.children))
        .endAngle(d => findEndAngle(d.children))
        .cornerRadius(5);

    //arc drawing
    const arcDraw = svg
        .append("g")
        .selectAll("g")
        .data(root.descendants().filter(d => d.height === 1))
        .join("g")
        .append("path")
        .attr("d", d => arc(d))
        .attr("fill", d =>
            eval(
                `color${d.data.label.charAt(0).toUpperCase() +
                    d.data.label.slice(1)}`
            )
        )
        .style("opacity", ".2");

    const node = svg
        .append("g")
        .attr("fill", "#3D4758")
        .selectAll("g")
        .data(root.leaves())
        .join("g")
        .attr(
            "transform",
            d => `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0)`
        )
        .append("text")
        .attr("font-size", +config.textSize)
        .attr("dy", "0.31em")
        .attr("dx", d =>
            d.x >= Math.PI
                ? `-${config.textOffset}em`
                : `${config.textOffset}em`
        )
        .attr("x", d => (d.x < Math.PI ? 15 : -15))
        .attr("text-anchor", d => (d.x < Math.PI ? "start" : "end"))
        .attr("transform", d => handleRotateText(d))
        .style("cursor", "pointer")
        .style("user-select", "none")
        .text(d => nodeById.get(d.data.label)[config.textMode])
        //for eadh node,
        .each(function(d) {
            d.text = this;
        })
        //overed is the behaviour when we have a mouseover on one of the elements(nodes)
        .on("mouseover", overed)
        .on("mouseout", outed)
        .on("click", clicked)
        .call(text =>
            text.append("title").text(d => `${nodeById.get(d.data.label).name}`)
        );

    //link drawing
    const link = svg
        .append("g")
        .attr("stroke", colornone)
        .attr("fill", "none")
        .selectAll("path")
        .data(root.leaves().flatMap(leaf => leaf.outgoing))
        .join("path")
        .style("mix-blend-mode", "darken")
        .attr("d", ([i, o]) => line(i.path(o)))
        .each(function(d) {
            d.path = this;
        });

    const circle = svg
        .append("g")
        .selectAll("g")
        .data(root.leaves())
        .join("g")
        .attr(
            "transform",
            d => `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0)`
        )

        .append("circle") // attach a circle
        .attr("dy", "0.31em")
        .attr("cx", d => (d.x < Math.PI ? 6 : -6))
        .attr("transform", d => (d.x >= Math.PI ? "rotate(180)" : null))

        .attr("r", d => 8) // set the radius
        .style("fill", d =>
            eval(
                `color${d.data.group.charAt(0).toUpperCase() +
                    d.data.group.slice(1)}`
            )
        )
        .each(function(d) {
            d.circle = this;
        })
        .style("cursor", "pointer")
        .on("click", clicked);

    // circle
    //     .transition()
    //     .duration(200)
    //     .ease(d3.easeLinear)
    //     .attr("r", d => 8); // set the radius

    // check if there is a selected element
    if (store.getState().application.focused !== null) {
        setTimeout(() => {
            setPrimaryAnimation(
                null,
                store
                    .getState()
                    .viz.root.leaves()
                    .find(
                        node =>
                            node.data.label ===
                            store.getState().application.focused.label
                    )
            );
        }, 300);
    }

    return svg.node();
};
