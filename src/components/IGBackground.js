import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const IGBackground = ({ username, quality }) => {

  const [imageResources, setImages] = useState(null);
  const [imageDims, setImageDims] = useState(0);

  function getImageDims() {
    if (!imageResources || !imageResources.length) setImageDims(0);
    else setImageDims(
      Math.sqrt((window.innerHeight * window.innerWidth) / imageResources.length)
    );
  }

  useEffect(() => {
    async function getMedia() {
      if (!username) return;
      const resp = await fetch(`https://www.instagram.com/${ username }/?__a=1`);
      const { graphql } = await resp.json();
      setImages(
        graphql.user
          .edge_owner_to_timeline_media.edges
          .map(({ node }) => node.thumbnail_resources)
      )
    }

    getMedia();
  }, [username]);

  useEffect(getImageDims, [imageResources]);
  window.addEventListener("resize", getImageDims)

  const Tile = styled.div`
    width: ${imageDims }px;
    height: ${imageDims }px;
    flex-grow: 1;
  `

  const Container = styled.div`
    position: fixed;
    height: ${imageDims * Math.floor(window.innerHeight / imageDims) }px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    border: white solid 10px;
  `

  return (
    <Container>
      { imageResources &&
        imageResources.map(res => (
          <Tile key={ res[0].src }>
            <Post src={ res[quality || 1].src } alt="recent post" />
          </Tile>
        ))
      }

      <Filter />
    </Container>
  )
}

export default IGBackground;

const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom right,teal,blue,purple);
  opacity: .7;
`

const Post = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`