import { Box, type BoxProps } from "@chakra-ui/react";
import "./GlassCard.scss";

interface IGlassCard extends BoxProps {
    children: React.ReactNode;
}

const GlassCard = ({ children, ...rest }: IGlassCard) => {
    return (
        <Box className="glass-card" {...rest}>
            {children}
        </Box>
    );
};

export default GlassCard;
