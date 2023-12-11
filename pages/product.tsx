import Image from 'next/image';
import { Box, Grid} from '@mui/material';
import LayoutHomePage from '@/src/layouts/home';
import { StyledDividerHorizontal} from '@/src/stylesComponent/divider';

export default function Product() {
  return (
    <LayoutHomePage  title='Gold Brick'>
        <Grid container spacing={4} className='px-5'>
            <Grid item xs={7}>
                
                <Box>
                <Box >
                    <p className="text-subtitle mb-0 mt-4">INMUEBLES</p>
                    <h2 className="text-title mb-5">DESTACADOS</h2>
                </Box>
                <Image
                    src="/images/room.avif"
                    alt="Banner"
                    fill
                    className='position-relative'
                />
                <h3 className='text-infor my-4'>INFORMACIÓN</h3>
                <p className='text-description pt-0'>Lorem ipsum dolor sit amet consectetur adipiscing elit neque
                bibendum platea penatibus laoreet facilisis etiam,
                condimentum lectus taciti dis himenaeos sociis sapien hac cras
                lacus interdum natoque potenti. Habitasse vitae ridiculus
                vivamus eros diam porttitor dapibus consequat nullam sociosqu
                egestas, lobortis pellentesque condimentum dictum posuere
                tortor quam per dui varius, gravida suspendisse faucibus auctor
                nam sodales donec a lacus ante
                </p>
                </Box>
            </Grid>
            <Grid item xs={5}>
                <Box className="product-information px-5 my-5">
                    <h3 className='text-title__product mt-4 mb-5 text-center'>NOMBRE DE LA PROPIEDAD</h3>
                    <Box className="mb-5">
                        <h4 className="text-bold text-center mb-0">STARTING PRICE</h4>
                        <p className="text-center text-normal__big">$2'500.000.000</p>
                    </Box>
                    <Box className="mb-5">
                        <h4 className="text-bold text-center mb-0">UBICACION</h4>
                        <p className="text-center text-normal__big">West Palm Beach, 27th Road</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.849787553223!2d-75.69274202513078!3d4.795824195179568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38876503059207%3A0xd5671df2301e9a3b!2sUTP!5e0!3m2!1ses!2sco!4v1684277267023!5m2!1ses!2sco" width="100%" height="220" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                    <StyledDividerHorizontal className="mb-5" />
                    <Box className="d-flex flex-row justify-content-between flex-wrap mb-4">
                        <Box className="d-flex flex-row me-3">
                            <p className='text-title__product-subtitle me-3 fs-5'>AREA</p><span className='text-normal__big fs-5 fw-normal mb-2'>2000 m2</span>
                        </Box>
                        <Box className="d-flex flex-row me-3">
                            <p className='text-title__product-subtitle me-3 fs-5'>CUARTOS</p><span className='text-normal__big fs-5 fw-normal mb-2'>5</span>
                        </Box>
                        <Box className="d-flex flex-row">
                            <p className='text-title__product-subtitle me-3 fs-5'>BAÑOS</p><span className='text-normal__big fs-5 fw-normal mb-2'>4</span>
                        </Box>
                    </Box>
                    <Box className="d-flex flex-row justify-content-between flex-wrap mb-5">
                        <Box className="d-flex flex-row me-3">
                            <p className='text-title__product-subtitle me-3 fs-5'>PARQUEADEROS</p><span className='text-normal__big fs-5 fw-normal mb-2'>2</span>
                        </Box>
                        <Box className="d-flex flex-row me-3">
                            <p className='text-title__product-subtitle me-3 fs-5'>PISO</p><span className='text-normal__big fs-5 fw-normal mb-2'>5</span>
                        </Box>
                        <Box className="d-flex flex-row">
                            <p className='text-title__product-subtitle me-3 fs-5'>TERRAZA</p><span className='text-normal__big fs-5 fw-normal mb-2'>1</span>
                        </Box>
                    </Box>
                    <StyledDividerHorizontal className="mb-5" />
                    <Box className="d-flex flex-row justify-content-between flex-wrap mb-5">
                        <Box className="d-flex flex-column me-3">
                            <p className='text-title__product-subtitle  text-center fs-5'>ADMINISTRACION</p><span className='text-normal__big text-center fs-5 fw-medium mb-2'>$1.500.000</span>
                        </Box>
                        <Box className="d-flex flex-column me-3">
                            <p className='text-title__product-subtitle text-center fs-5'>ESTRATO</p><span className='text-normal__big text-center fs-5 fw-medium mb-2'>6</span>
                        </Box>
                        <Box className="d-flex flex-column">
                            <p className='text-title__product-subtitle  text-center fs-5'>AÑO DE LA CASA</p><span className='text-normal__big text-center fs-5 fw-medium mb-2'>2014</span>
                        </Box>
                    </Box>
                    <StyledDividerHorizontal />
                    <h4 className='text-title__product-subtitle mt-4 mb-3 text-center'>CARACTERISTICAS</h4>
                    <ul>
                        <li className='text-description'>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        </li>
                        <li className='text-description'>
                        lacus interdum natoque potenti. Habitasse vitae ridiculus
                        vivamus eros diam porttitor dapibus consequat nullam sociosqu
                        </li>
                    </ul>
                </Box>
            </Grid>
        </Grid>

    </LayoutHomePage>
  )
}
