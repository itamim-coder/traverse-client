"use client";

import FormInput from "@/app/components/Forms/FormInput";
import FormSelectField from "@/app/components/Forms/FormSelectField";
import Form from "@/app/components/Forms/form";
import { useCreateHotelMutation } from "@/redux/api/hotelApi";
import { useGetLocationQuery } from "@/redux/api/locationApi";
import { SubmitHandler } from "react-hook-form";
type FormValues = {
  name: string;
  average_rating: number;
  city: string;
  address: string;
  photos: string[]; // Use an array for photos
};

const HotelForm = () => {
  const [createHotel] = useCreateHotelMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      // const res = await createAdmin({ ...data }).unwrap();
      data.photos = [
        "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcA2ASZehq01bX9VmPy/bygTsNHixAqQpFHiM9qefnv7saDtjHVR02Ad8c6SLyF5vmg==",
        "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcFOCbacwIWThy4du/6q94u4bkJ0/rm9/PyLoBgPWTV2mrxMmxXrZogGkTjq2SgFq4w==",
        "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcMWoI6A/ckD31mb/oEB7r5Yh56eOezK1qxd4SRHATzCy6Znk0Zsv+TRLk+2VhIg0ng==",
        "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcOSYMHHEX6cf9fsiBlDUjettmH9Rj9FDN3JNTgygHcs7gNy+J0vuncm4wztjSY/pcg==",
        "https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcBo9BMrrdllA/GFkw9Yri1e8lVV2JqVmfsvd0eDQvlEitz8KnzTZ7oJrihcQcXlMtQ==",
      ];
      console.log(data);

      const res = await createHotel({ ...data });
      console.log(res);
    } catch (err) {}
  };

  const { data: locations, isLoading } = useGetLocationQuery(undefined);

  const locationOption = locations?.map((location:any) => ({
    label: location.name,
    value: location.id,
  }));

  return (
    <>
      <h1>Hotel Information</h1>
      <div className="">
        <Form submitHandler={onSubmit}>
          <div className="">
            <FormInput name="name" type="text" size="large" label="Full Name" />
          </div>
          <div className="my-4">
            <FormInput
              name="average_rating"
              type="number"
              size="large"
              label="Average Rating"
            />
          </div>
          <div className="my-4">
            <FormInput name="city" type="text" size="large" label="City" />
          </div>
          <div className="my-4">
            <FormInput
              name="address"
              type="text"
              size="large"
              label="Address"
            />
          </div>
          <div className="my-4">
            <FormInput
              name="cheapest_price"
              type="text"
              size="large"
              label="Cheapest Price"
            />
          </div>
          <div className="my-4">
            <FormSelectField
              size="large"
              name="locationId"
              options={locationOption}
              label="Location"
              placeholder="Select"
            />
          </div>

          <button
            type="submit"
            className="group relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Hotel
          </button>
        </Form>
      </div>
    </>
  );
};

export default HotelForm;
