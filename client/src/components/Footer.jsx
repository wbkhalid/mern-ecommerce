import { Container, Typography } from "@mui/material"

const Footer = () => {
    return (
        <footer style={{ marginTop: 'auto', padding: '.6rem 0', backgroundColor: 'rgba(0,0,0,.6)' }}>
            <Container maxWidth="lg">
                <Typography variant="subtitle1" align="center" color="#fff">
                    @ all right reserved
                </Typography>
            </Container>
        </footer>
    )
}
export default Footer
