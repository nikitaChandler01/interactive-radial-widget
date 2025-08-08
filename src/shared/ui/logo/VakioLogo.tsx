interface IVakioLogo {
    width?: number;
    height?: number;
    color?: string; // Новый проп для цвета
}

const VakioLogo = ({
    width = 150,
    height = 30,
    color = "var(--chakra-colors-color-palette-contrast)",
}: IVakioLogo) => (
    <svg width={width} height={height} viewBox="0 0 96 20" fill="none">
        <path d="M0 0L9.99871 20L19.9987 0H0Z" fill={color} />
        <path d="M26.0586 0L16.0586 20H36.0586L26.0586 0Z" fill={color} />
        <path d="M39.6328 0V20H59.6328L49.6328 10L59.6328 0H39.6328Z" fill={color} />
        <path d="M62.4473 20H72.4484V0H62.4473V20Z" fill={color} />
        <path
            d="M85.9668 20C80.4433 20 75.9668 15.5231 75.9668 10C75.9668 4.47687 80.4433 0 85.9668 0C91.4897 0 95.9668 4.47687 95.9668 10C95.9668 15.5231 91.4897 20 85.9668 20Z"
            fill={color}
        />
    </svg>
);
export { VakioLogo };
