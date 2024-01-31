import { Box, Button, Grid, TextField } from "@mui/material";
import AutocompleteComponent from "../../../../Components/MuiComponents/AutocompliteComponent";
import TextAreaComponent from "../../../../Components/MuiComponents/TextAreaComponent";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import {Head, router} from "@inertiajs/react";
import { Option } from "@/Entities/Option/model/types";
import CloseIcon from '@mui/icons-material/Close';


const ProductPanelComponent = ({categories, catalogs, options, valuesForOptions }: any) => {

    const formData = new FormData();

    const [filtredCatalogs, setFiltredCatalog] = useState([]);
    const [previewImg, setPreviewImg] = useState<any>([]);
    const [files, setFiles] = useState<any>([]);
    const [categoryId, setCategoryId] = useState(null);
    const [catalogId, setCatalogId] = useState(null);
    const [optionId, setOptionId] = useState(null);
    const [optionsEl, setOptionsEl] = useState<Option[]>([]);

    const [productData, setProductData] = useState<any>({
        title: '',
        catalog_id: '',
        price: '',
        quantity: '',
        description: '',
        options: []
    });

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

    const handleChange = (value: any, name: string) => {
        setProductData({...productData, [name]: value});
    }

    const handleChangeCategory = (e: any) => {
        setCategoryId(e.target.value);
    }

    const handleChangeCatalog = (e: any) => {
        setCatalogId(e.target.value);
    }

    const handleChangeFile = (e: any) => {
        if(files.length < 4) {
            setFiles([...files, e.target.files]);
        }
    }

    const handleChangeOption = (e: any) => {
        setOptionId(e.target.value);
    }

    const addOption = () => {
        let checkUnique = true;
        const optionArr = options.filter((option: Option) => option.id == optionId);        
        optionsEl.forEach((el: Option) => {
            if(el.id == optionArr[0].id) {
                checkUnique = false;
            }
        });
        if(checkUnique) {
            setOptionsEl([...optionsEl, optionArr[0]]);
            setProductData({...productData, options: [...productData.options, optionId]});
        }
    }
    
    const filterCatalogs = () => {
        if(categoryId == null || categoryId == undefined) {
            setFiltredCatalog([]);
        } else {
            setFiltredCatalog(catalogs.filter((catalog: Catalog) => catalog.category_id == categoryId));
        }
    }
    
    const closeElOptions = (id: number) => {
        setProductData({...productData, options: productData.options.filter((option: number) => option != id)});
        setOptionsEl(optionsEl.filter((option: Option) => option.id != id));
    }

    useEffect(() => {
        filterCatalogs();
    }, [categoryId]);

    useEffect(() => {
        handleChange(catalogId, 'catalog_id');
    }, [catalogId]);

    useEffect(() => { 
        files.forEach((file: any) => {
            setPreviewImg([...previewImg, [...file].map((el) => URL.createObjectURL(el))]);
        });
      }, [files]);
      
      const sendData = () => {

        for (const key in productData) {
            if(key == 'options') {                
                formData.set(key, JSON.stringify(productData[key]));
            }
            formData.set(key, productData[key]);
        }
        
        for (const el of files) {
            formData.append('images[]', el[0]);
        }        

        router.post(route('setProduct'), formData, {
            onSuccess: (result) => {
                for (const key in productData) {
                    if (Object.prototype.hasOwnProperty.call(productData, key)) {
                        productData[key] = '';
                    }
                }
                setProductData(productData);
                setFiles([]);
                setPreviewImg([]);
                setOptionsEl([]);
            },
            onError: (err) => {
                console.log(err);
            }
        });

      }
      
    return (
        <Grid container gap={1} sx={{maxWidth: '1400px', padding: '10px', border: 'solid 1px black', margin: '77px auto 0 auto', justifyContent: 'center'}}>
            <Head title="Product" />
            <Grid item xs={12} sx={{margin: '0 auto', textAlign: 'center'}}>
                <TextField label="Название" variant="outlined" helperText="Правила к записи" value={productData.title} onChange={(e: any) => {handleChange(e.target.value, 'title')}}/>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <AutocompleteComponent noOptionsText='Нет категорий' style={{marginRight: '10px'}} options={categories} label="Категории" handleChange={handleChangeCategory}/>
                <AutocompleteComponent noOptionsText='Нет каталогов' style={{}} options={filtredCatalogs} label={categoryId == null ? "Выберите категорию" : "Каталоги"} handleChange={handleChangeCatalog}/>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <TextField label="Цена" variant="outlined" type="number" helperText="Правила к записи" value={productData.price} onChange={(e: any) => {handleChange(e.target.value, 'price')}}/>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <TextField label="Количество" variant="outlined" type="number" helperText="Правила к записи" value={productData.quantity} onChange={(e: any) => {handleChange(e.target.value, 'quantity')}}/>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <AutocompleteComponent noOptionsText="Нет опций" style={{}} label="Опции" options={options} handleChange={handleChangeOption}/>
                <Button variant="outlined" onClick={addOption}>Добавить в список</Button>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <Box>
                    {optionsEl.map((option: Option) => (<span key={option.id}>{option.title} <CloseIcon sx={{'&:hover': {cursor: 'pointer'}}} onClick={() => {closeElOptions(option.id)}}/>| </span>))}
                </Box>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <TextAreaComponent style={{width: {xs: '360px', ml: '900px'}}} value={productData.description} handleChange={handleChange}/>
            </Grid>
            <Grid>
            <Grid item xs={12}>
              <Button
                component="label"
                variant="text"
                color="primary"
                size="small"
                startIcon={<CloudUploadIcon/>}
                sx={{border: 'solid 1px black', borderRadius: '5px', padding: '10px'}}
              >
                Загрузить фото
              <VisuallyHiddenInput
                type="file"
                multiple
                onChange={handleChangeFile}
              />
              </Button>
              <p>до 4 изображений</p>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'start'}}>
              {previewImg && previewImg.map((url: any, index: any) => (
                <img
                  src={url}
                  key={index}
                  width={100}
                  height={100}
                  style={{margin: '5px'}}
                />
              ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <Button variant="outlined" onClick={sendData}>Добавить продукт</Button>
            </Grid>
        </Grid>
    );
}

export default ProductPanelComponent;
