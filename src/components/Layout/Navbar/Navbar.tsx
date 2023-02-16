"use client";
import { Button, Hidden, IconButton } from "@mui/material";
import Link from "next/link";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import s from "./Navbar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import School from "@/icons/School";
import { tourney } from "@/utils/fonts";
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <header className={s.navbar}>
      <Container>
        <div className={s.flex}>
          <div className={`${s.logo} ${tourney.className}`}>
            <School />
            Szkolny Przewodnik
          </div>
          <Hidden lgUp implementation="css">
            <IconButton color="secondary">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden lgDown implementation="css">
            <nav className={s.nav}>
              <Button
                className={s.nav_button}
                variant="contained"
                color="secondary"
                startIcon={<HomeIcon />}
              >
                <Link href="/">STRONA GŁÓWNA</Link>
              </Button>
              <Button
                className={s.nav_button}
                variant="contained"
                color="secondary"
              >
                <Link href="/mapa">MAPA</Link>
              </Button>
              <Button
                className={s.nav_button}
                variant="contained"
                color="secondary"
              >
                <Link href="/o-nas">O NAS</Link>
              </Button>
            </nav>
          </Hidden>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
