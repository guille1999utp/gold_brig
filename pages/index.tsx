import { Inter } from 'next/font/google';
import LayoutHomePage from '@/src/layouts/home';
import Image from 'next/image';
import { Box, Button, Checkbox, Divider, FormControlLabel, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LayoutHomePage  title='Gold Brick'>
    <Box className="site-home">
      <Image
            src="/images/banner.jpg"
            alt="Banner"
            fill
            className='site-home__image'
          />
      <Box className="site-home__content">
        <h1 className='content__title'>COMPRA, RENTA Y VENDE</h1>
        <p className='content__description'>DE LA MANERA MAS CONFIABLE</p>
      </Box>
    </Box>
    <Box className="site-home-search">
      <Image
              src="/images/home-white-gold-brick.png"
              alt="Banner"
              width={169}
              height={95}
              className='site-home-search__image'
            />
      <Box className="site-home-search__contain">
        <h2 className="text-title mb-5">BUSCADOR</h2>
        <form className="site-home-search__form d-flex flex-row p-5 justify-content-between">
          <Box className="d-flex flex-column justify-content-between">
            <Button variant="contained" className='site-home-search__button background-color-cuaternario'>Comprar</Button>
            <Button variant="contained" className='site-home-search__button background-color-secundario'>Rentar</Button>
          </Box>
          <Box className="d-flex flex-row flex-fill pt-4">
            <Box className="d-flex flex-column align-self-end ms-4  flex-fill">
              <InputLabel id="ubicacion" className='site-home-search__label'>UBICACIÓN</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="ubicacion"
                autoWidth
                startAdornment={
                  <MdLocationOn fontSize={40} />
                }
                label="Age"
              >
                <MenuItem value="">
                  None
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </Box>
            <Divider orientation="vertical" flexItem className='mx-4 site-home-search__divider'/>
            <Box className="d-flex flex-column align-self-end justify-content-between">
              <InputLabel id="ubicacion" className='site-home-search__label'>PRECIO MINIMO</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="ubicacion"
                fullWidth
                label="Age"
              >
                <MenuItem value="">
                  Min
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </Box>
            <Box className="d-flex flex-column align-self-end justify-content-between ms-4">
              <InputLabel id="ubicacion" className='site-home-search__label'>PRECIO MAXIMO</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="ubicacion"
                autoWidth
                label="Age"
              >
                <MenuItem value="">
                  Max
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </Box>
            <FormControlLabel className='ms-4 me-5 align-self-end mb-3' control={<Checkbox  />} label={<span className='text-normal'>No Fee</span>} />
            <Button variant="contained" className='background-color-cuaternario mb-3'><AiOutlineSearch fontSize={70}/></Button>
          </Box>
        </form>
        <p className='text-normal text-center mt-5'>Sujerencia de texto : Encuentra tu hogar ideal usando nuestro navegador inteligente</p>
      </Box>
    </Box>
    <Box className="site-home-service">
      <p className="site-home-service__description">OPENNIG SOON</p>
      <h3 className="site-home-service__title">S E R V I C I O S</h3>
    </Box>
    </LayoutHomePage>
  )
}
