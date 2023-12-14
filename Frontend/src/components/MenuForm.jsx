import Button from "./Button";
import Card from "./Card";
import CardBody from "./CardBody";
import Input from "./Input";
import InputFile from "./InputFile";
import InputGroup from "./InputGroup";
import InputLabel from "./InputLabel";
import { useForm } from "react-hook-form";

function MenuForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submit = (data) => onSubmit(data);

  return (
    <Card>
      <CardBody>
        <h6 className="text-primary font-medium text-base">Tambahkan Menu</h6>

        <form onSubmit={handleSubmit(submit)}>
          <div className="mt-3">
            <InputLabel label="Nama Menu" />
            <Input type="text" {...register("name", { required: true })} error={errors.name} />
          </div>

          <div className="mt-3">
            <InputLabel label="Gambar Menu"  />
            <InputFile {...register("image", { required: true })} error={errors.image}/>
          </div>

          <div className="mt-3">
            <InputLabel label="Harga Menu" />
            <InputGroup>
              <div className="bg-primary px-4 py-1 text-white">Rp.</div>
              <Input type="number" {...register("price", { required: true })} error={errors.price} />
            </InputGroup>
          </div>

          <div className="mt-5 flex justify-end">
            <Button type="submit" color="success">Simpan</Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

export default MenuForm;
