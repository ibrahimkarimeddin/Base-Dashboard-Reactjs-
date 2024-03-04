import React, { FC } from "react";
import { Editor } from '@tinymce/tinymce-react';
import { useFormikContext } from "formik";

interface HtmlEditorProps {
  langCode: number;
  name: string;
  editorState: string;
}

const HtmlEditor: FC<HtmlEditorProps> = ({ langCode, name, editorState, ...props }) => {
  const formik = useFormikContext();
  
  const ar: boolean = langCode === 2;

  return (
    <Editor
      apiKey='6xf0byrgd7m2j28p9dfjittsq884x9j0d3e6dsterqrvtvez'
      value={editorState}
      init={{
        height: 500,
        menubar: false,
        directionality: ar ? "rtl" : "ltr",
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
      onEditorChange={(newValue, editor) => {
        formik.setFieldValue(name, newValue)
      }}
    />
  );
}

export { HtmlEditor };