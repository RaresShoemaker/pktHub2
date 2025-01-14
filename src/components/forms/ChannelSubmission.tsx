import React, { FormEvent, useState, useRef } from 'react';
import { useToast } from '../../context/ToasterBannerContext/hooks';
import { TOASTER_TYPES } from '../../context/ToasterBannerContext/constants';
import CustomInput from '../CustomInput';
import CustomDropdown from '../CustomDropDown';
import ImgUploader from '../ImageUploader';

const ChannelSubmissionForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const jotformRef = useRef<HTMLFormElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    platform_description: '',
    platform_link: '',
    category: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const { showToast } = useToast();

  const FORM_ID = import.meta.env.VITE_JOTFORM_FORM_ID;

  const categoryOptions = [
    { value: 'Media', label: 'Media' },
    { value: 'Music', label: 'Music' },
    { value: 'Gaming', label: 'Gaming' },
    { value: 'Casino', label: 'Casino' },
    { value: 'Crypto/Tech', label: 'Crypto/Tech' },
    { value: 'AI', label: 'AI' },
    { value: 'Meme', label: 'Meme' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    const id = e.target.id || e.target.name?.replace('q15_', '');
    
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      company_name: '',
      email: '',
      platform_description: '',
      platform_link: '',
      category: ''
    });
    setFile(null);
    setResetKey(prev => prev + 1);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.company_name ||
      !formData.email ||
      !formData.platform_description ||
      !formData.platform_link ||
      !formData.category
    ) {
      showToast('Please fill in all fields', TOASTER_TYPES.ERROR, 3000);
      return;
    }

    if (!file) {
      showToast('Please upload a file', TOASTER_TYPES.ERROR, 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      if (jotformRef.current) {
        const form = jotformRef.current;
        form.q6_companyName.value = formData.company_name;
        form.q12_email.value = formData.email;
        form.q7_typeA7.value = formData.platform_description;
        form.q8_typeA8.value = formData.platform_link;
        form.q14_verifiedEmail.value = '';
        
        // Set category value
        if (formData.category) {
          form.q15_category.value = formData.category;
        }

        const fileList = new DataTransfer();
        if (file) fileList.items.add(file);
        const fileInput = form.querySelector('input[name="q11_fileUpload[]"]') as HTMLInputElement;
        if (fileInput) {
          fileInput.files = fileList.files;
        }

        form.target = 'hidden_iframe';
        form.submit();
        showToast('You must verify your email to submit', TOASTER_TYPES.INFO, 10000);
        resetForm();
      }
    } catch (error) {
      console.error('Submission error:', error);
      showToast(
        error instanceof Error ? error.message : 'Failed to submit form. Please try again.',
        TOASTER_TYPES.ERROR,
        3000
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
        <CustomInput
          type="text"
          label="Company Name"
          id="company_name"
          value={formData.company_name}
          onChange={handleInputChange}
        />
        <CustomInput
          type="email"
          label="Email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <CustomInput
          type="text"
          label="Platform Description"
          id="platform_description"
          value={formData.platform_description}
          onChange={handleInputChange}
        />
        <CustomInput
          type="text"
          label="Platform Link"
          id="platform_link"
          value={formData.platform_link}
          onChange={handleInputChange}
        />
        <CustomDropdown
          label="Category"
          id="category"
          value={formData.category}
          options={categoryOptions}
          onChange={handleInputChange}
        />
        <ImgUploader
          onFileSelect={(file: File | null) => setFile(file)}
          resetKey={resetKey}
          name="file_upload"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="text-primary rounded-full bg-white w-full py-3 text-center font-semibold uppercase disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <iframe 
        name="hidden_iframe" 
        ref={iframeRef}
        className="hidden"
        title="Hidden Frame"
      />

      <form
        ref={jotformRef}
        action={`https://submit.jotform.com/submit/${FORM_ID}`}
        method="post"
        encType="multipart/form-data"
        className="hidden"
        target="hidden_iframe"
      >
        <input type="hidden" name="formID" value={FORM_ID} />
        <input type="text" name="q6_companyName" />
        <input type="email" name="q12_email" />
        <input type="text" name="q7_typeA7" />
        <input type="text" name="q8_typeA8" />
        <input type="text" name="q14_verifiedEmail" />
        <select name="q15_category" id="input_15" className="form-dropdown">
          <option value="">Please Select</option>
          {categoryOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input type="file" name="q11_fileUpload[]" multiple />
      </form>
    </>
  );
};

export default ChannelSubmissionForm;