export const d3 = require("d3");

const radius = 300
const tree = d3.cluster().size([2 * Math.PI, radius]);

const line = d3
    .lineRadial()
    .curve(d3.curveBundle.beta(0.85))
    .radius(d => d.y)
    .angle(d => d.x);

const width = 1100;
const colornone = "#ccc";

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
    var min = children[0].x;
    children.forEach(function(d) {
        if (d.x < min) min = d.x;
    });
    return min - 0.3;
};

const findEndAngle = children => {
    var max = children[0].x;
    children.forEach(function(d) {
        if (d.x > max) max = d.x;
    });
    return max + 0.3;
};

export const chart = (svg, { nodes, links }) => {
    // console.log(svg);
    const data = data_({ nodes, links });
    console.log(data);

    var colorStakeholder = "#4A6FA5";
    var colorData = "#FFDA0A";
    var colorProcess = "#61C9A8";
    var colorPolicy = "#FB5012";

    const nodeById = new Map(nodes.map(node => [node.label, node]));

    const root = tree(
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

    // console.log(root.descendants().filter(d => d.height == 1));

    // const svg = d3
    //     .create("svg")
    //     .attr("viewBox", [-width / 2, -width / 2, width, width]);

    svg.attr("viewBox", [-width / 2 + 30, -width / 2, width, width]);

    // 🏛
    const arcWidth = 10
    const arc = d3
        .arc()
        .innerRadius(radius+6 - arcWidth)
        .outerRadius(radius+6+ arcWidth)
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
        // .attr("transform", d => (d.endAngle <= Math.PI ? ("rotate(-2)") : "rotate(4)"))
        .attr("fill", d =>
            eval(
                `color${d.data.label.charAt(0).toUpperCase() +
                    d.data.label.slice(1)}`
            )
        )
        .style("opacity", ".2");

    const node = svg
        .append("g")
        .attr("font-size", 16)
        .attr("fill", "#3D4758")
        .selectAll("g")
        .data(root.leaves())
        .join("g")
        .attr(
            "transform",
            d => `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0)`
        )
        .append("text")
        .attr("dy", "0.31em")
        .attr("dx", d => (d.x >= Math.PI ? "-1em" : "1em"))
        .attr("x", d => (d.x < Math.PI ? 15 : -15))
        .attr("text-anchor", d => (d.x < Math.PI ? "start" : "end"))
        .attr("transform", d => (d.x >= Math.PI ? "rotate(180)" : null))
        // .attr("fill", d =>
        //     eval(
        //         `color${d.data.group.charAt(0).toUpperCase() +
        //             d.data.group.slice(1)}`
        //     )
        // )
        // .attr("fill", colornone
        // )
        .style("cursor", "pointer")
        .text(d => nodeById.get(d.data.label).name)
        //for eadh node,
        .each(function(d) {
            d.text = this;
        })
        //overed is the behaviour when we have a mouseover on one of the elements(nodes)
        .on("mouseover", overed)

        .on("mouseout", outed)
        .call(text =>
            text
                .append("title")
                .text(
                    d =>
                        `${nodeById.get(d.data.label).name} ${
                            d.outgoing.length
                        } outgoing ${d.incoming.length} incoming`
                )
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
        });

    //change link style based on the event(mouseover mouseouted
    function overed(event, d) {
        link.style("mix-blend-mode", null);
        d3.select(this).attr("font-weight", "bold");
        d3.selectAll(d.incoming.map(d => d.path))
            .data(d.incoming.map(d => d[0]))
            .attr("stroke", t =>
                eval(
                    `color${t.data.group.charAt(0).toUpperCase() +
                        t.data.group.slice(1)}`
                )
            )
            .attr("stroke-width", 1.5)
            .raise();
        // d3.selectAll(d.incoming.map(([d]) => d.text)).attr("fill", colorin).attr("font-weight", "bold");

        // d3.selectAll(d.incoming.map(([d]) => d.text)).data(d.incoming).attr("fill", eval(`color${d.data.group.charAt(0).toUpperCase() + d.data.group.slice(1)}`)).attr("font-weight", "bold");

        // d3.selectAll(d.incoming.map(([d]) => d.circle)).style("fill", colorin);
        // d.incoming.filter(d => d.path === path)[0]
        d3.selectAll(d.outgoing.map(d => d.path))
            .attr(
                "stroke",
                eval(
                    `color${d.data.group.charAt(0).toUpperCase() +
                        d.data.group.slice(1)}`
                )
            )
            .attr("stroke-width", 1.5)
            .raise();
        d3.selectAll(d.outgoing.map(([, d]) => d.text)).attr(
            "font-weight",
            "bold"
        );
        // d3.selectAll(d.outgoing.map(([, d]) => d.circle)).style("fill", colorout);
    }
    //in outed state, made everything reseted
    function outed(event, d) {
        link.style("mix-blend-mode", "darken");
        d3.select(this).attr("font-weight", null);
        d3.selectAll(d.incoming.map(d => d.path))
            .attr("stroke", null)
            .attr("stroke-width", 1);
        d3.selectAll(d.incoming.map(([d]) => d.text))
            .attr("fill", null)
            .attr("font-weight", null);
        // d3.selectAll(d.incoming.map(([d]) => d.circle)).style("fill", null);
        d3.selectAll(d.outgoing.map(d => d.path))
            .attr("stroke", null)
            .attr("stroke-width", 1);
        d3.selectAll(d.outgoing.map(([, d]) => d.text))
            .attr("fill", null)
            .attr("font-weight", null);
        // d3.selectAll(d.outgoing.map(([, d]) => d.circle)).style("fill", null);
    }

    return svg.node();
};
