import { Inter } from 'next/font/google';
import LayoutHomePage from '@/src/layouts/home';
import Image from 'next/image';
import { Box, Button, Checkbox, Divider, FormControlLabel, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AiOutlineSearch } from "react-icons/ai";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LayoutHomePage  title='Gold Brick'>
    <nav className="site-nav">
      <ul className="site-nav__list">
        <li>
          <Image
            src="/images/icono.png"
            alt="Banner"
            width={120}
            height={120}
          />
        </li>
        <li className="site-nav__item"><a href="#" className="site-nav__link">HOME</a></li>
        <li className="site-nav__item"><a href="#" className="site-nav__link">SERVICE</a></li>
        <li className="site-nav__item"><a href="#" className="site-nav__link">NOSOTROS</a></li>
        <li className="site-nav__item"><a href="#" className="site-nav__link">PROYECTOS</a></li>
        <li className="site-nav__item"><a href="#" className="site-nav__link">INVERSIONES</a></li>
        <li className="site-nav__item"><a href="#" className="site-nav__link">CONTACTO</a></li>
      </ul>
    </nav>
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
      <Box className="site-home-search__contain">
        <h2 className="site-home-search__title mb-5">BUSCADOR</h2>
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
            <Button variant="contained" className='background-color-cuaternario'><AiOutlineSearch fontSize={70}/></Button>
          </Box>
        </form>

      </Box>
    </Box>
    </LayoutHomePage>
  )
}
