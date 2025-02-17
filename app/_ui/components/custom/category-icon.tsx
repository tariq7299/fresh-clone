import Hair from "@/_ui/icons/hair";

export default function CategoryIcon({ category, width, height, fill }: { category: string, width?: number, height?: number, fill?: string }) {
    return <div>
        {category === "hair" && <Hair width={width} height={height} fill={fill} />}
    </div>
}


