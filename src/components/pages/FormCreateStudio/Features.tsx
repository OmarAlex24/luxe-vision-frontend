import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import { useEffect, useState } from "react";
import { fetchAllFeatures } from "@/reducers/featuresReducer";
import { useSelector, useDispatch } from "react-redux";
import { selectFeatures } from "@/reducers/studioSelector";

export const Specialty = ({ onChangeInfo }: any) => {
  const [list, setList] = useState<number[]>([]);
  const dispatch = useDispatch();
  const features = useSelector(selectFeatures) || [];

  const handleChange = (e: any, id: number) => {
    setList((prevList) => {
      const updatedList = e.target.checked
        ? prevList.includes(id) ? prevList : [...prevList, id]
        : prevList.filter((item) => item !== id);

      onChangeInfo(updatedList);
      return updatedList;
    });
  };
  useEffect(() => {
    if (features.length === 0) {
      dispatch(fetchAllFeatures());
    }
  }, [dispatch, features.length]);

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold">Features</h2>
      <div role="group" aria-labelledby="topping">
        <List
          orientation="horizontal"
          wrap
          sx={{ "--List-gap": "8px", "--ListItem-radius": "20px" }}
        >
          {features.map((feature: any) => (
            <ListItem key={feature.id}>
              <Checkbox
                overlay
                disableIcon
                variant={list.includes(feature.id) ? "solid" : "soft"}
                color="danger"
                label={feature.featureName}
                value={feature.id}
                onChange={(e) => handleChange(e, feature.id)}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Specialty;
