import { useRouter } from 'next/router';
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';

export default function Product() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique veritatis hic
          voluptatem quibusdam fugiat facilis molestias nemo libero, tempora possimus sequi non,
          quas eos, cum sit harum laborum sunt. Labore?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
