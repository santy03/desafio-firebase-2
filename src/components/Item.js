import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
        <div>
            <img src={pictureUrl} />
                <div>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </div>
                <div>
                    <DescriptionOutlined />{stock} unid.
                </div>
                <div style={{cursor: "pointer"}}>
                    <Link to={"/item/${id}"}><InfoOutlined/>Details</Link>
                </div>
        </div>
    );
}

export default Item;

