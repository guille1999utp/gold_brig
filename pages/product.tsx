import { Inter } from 'next/font/google';
import Image from 'next/image';
import { Box, Grid} from '@mui/material';
import LayoutAllPage from '@/src/layouts/layoutAllPage';
import StyledDivider from '@/src/stylesComponent/divider';

export default function Home() {
  return (
    <LayoutAllPage  title='Gold Brick'>
        <Box className="ms-5">
        <p className="text-subtitle mb-0 mt-4">INMUEBLES</p>
        <h2 className="text-title mb-5">DESTACADOS</h2>
        </Box>
        <Grid container spacing={4} className='px-5'>
            <Grid item xs={7}>
                <Box>
                <Image
                    src="/images/room.avif"
                    alt="Banner"
                    fill
                    className='position-relative'
                />
                <h3 className='text-infor my-4'>INFORMACIÓN</h3>
                <p className='text-description'>Lorem ipsum dolor sit amet consectetur adipiscing elit neque
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
                <Box className="product-information px-5">
                    <h3 className='text-title__product mt-4 mb-5 text-center'>NOMBRE DE LA PROPIEDAD</h3>
                    <Box className="mb-5">
                        <h4 className="text-bold text-center mb-0">STARTING PRICE</h4>
                        <p className="text-center text-normal__big">$2'500.000.000</p>
                    </Box>
                    <Box className="mb-5">
                        <h4 className="text-bold text-center mb-0">UBICACION</h4>
                        <p className="text-center text-normal__big">West Palm Beach, 27th Road</p>
                    </Box>
                    <StyledDivider className="mb-5" />
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
                    <StyledDivider className="mb-5" />
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
                    <StyledDivider />
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

    </LayoutAllPage>
  )
}
