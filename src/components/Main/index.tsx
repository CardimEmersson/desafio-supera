import { FilterSelect } from "components/FilterSelect";
import { MainContainer } from "./Main.styles";
import { CardProduct } from "components/CardProduct";
import { Cart } from "components/Cart";
import { useCart } from "data/hooks/useCart";
import { useContext, useState } from "react";
import { ContextApi } from "contextApi";
import { useProducts } from "data/hooks/useProducts";

function Main() {
  const { products } = useProducts();
  const { addCart } = useCart();
  const { filter } = useContext(ContextApi);

  const [typeFilter, setTypeFilter] = useState("alphabeticalOrder");

  return (
    <MainContainer>
      <div className="filterContainer">
        <FilterSelect
          onChange={(e) => {
            setTypeFilter(e.currentTarget.value);
          }}
          defaultValue="alphabeticalOrder"
        >
          <option value="" disabled>
            Ordernar por
          </option>
          <option value="biggestPrice">Maior preço</option>

          <option value="lowestPrice">Menor preço</option>
          <option value="morePopular">Mais populares</option>
          <option value="lessPopular">Menos populares</option>
          <option value="alphabeticalOrder">Ordem alfabética</option>
        </FilterSelect>
      </div>

      <div className="grid">
        {products
          .sort((productA, productB) => filter(typeFilter, productA, productB))
          .map((product) => {
            return (
              <CardProduct
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                score={product.score}
                onAdd={() => addCart(product)}
              />
            );
          })}
      </div>

      <Cart />
    </MainContainer>
  );
}

export { Main };
