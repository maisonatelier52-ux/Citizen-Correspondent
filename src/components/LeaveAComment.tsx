// components/LeaveAComment.tsx
"use client";
import React, { useState } from "react";
import { MessageSquare } from "lucide-react";

interface CommentFormData {
  comment: string;
  name: string;
  email: string;
  website: string;
  saveInfo: boolean;
}

const LeaveAComment: React.FC = () => {
  const [formData, setFormData] = useState<CommentFormData>({
    comment: "",
    name: "",
    email: "",
    website: "",
    saveInfo: false,
  });

  const [errors, setErrors] = useState<Partial<CommentFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Load saved info from localStorage on mount
  React.useEffect(() => {
    const savedInfo = localStorage.getItem("commentInfo");
    if (savedInfo) {
      try {
        const parsed = JSON.parse(savedInfo);
        setFormData((prev) => ({
          ...prev,
          name: parsed.name || "",
          email: parsed.email || "",
          website: parsed.website || "",
          saveInfo: true,
        }));
      } catch (e) {
        // Invalid JSON, ignore
      }
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Partial<CommentFormData> = {};

    if (!formData.comment.trim()) {
      newErrors.comment = "Comment is required";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = "Please enter a valid URL (e.g., https://example.com)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Save info to localStorage if checkbox is checked
      if (formData.saveInfo) {
        localStorage.setItem(
          "commentInfo",
          JSON.stringify({
            name: formData.name,
            email: formData.email,
            website: formData.website,
          })
        );
      } else {
        localStorage.removeItem("commentInfo");
      }

      // Show success message
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        comment: "",
        name: formData.saveInfo ? formData.name : "",
        email: formData.saveInfo ? formData.email : "",
        website: formData.saveInfo ? formData.website : "",
        saveInfo: formData.saveInfo,
      });
      setErrors({});

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Failed to submit comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof CommentFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="bg-white py-4">
      <div className="w-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="w-6 h-6 text-gray-900" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Leave a Comment
          </h2>
        </div>

        {/* Privacy Notice */}
        <p className="text-sm text-gray-600 mb-6">
          <span className="italic">Your email address will not be published.</span>{" "}
          Required fields are marked <span className="text-red-500">*</span>
        </p>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded">
            Thank you for your comment! It has been submitted successfully.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Comment Textarea */}
          <div className="mb-6">
            <textarea
              placeholder="Leave a Comment *"
              rows={8}
              value={formData.comment}
              onChange={(e) => handleChange("comment", e.target.value)}
              className={`w-full px-4 py-3 bg-gray-50 border ${
                errors.comment ? "border-red-500" : "border-gray-200"
              } rounded-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none`}
            />
            {errors.comment && (
              <p className="mt-1 text-sm text-red-500">{errors.comment}</p>
            )}
          </div>

          {/* Input Fields Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <input
                type="text"
                placeholder="Your name *"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`w-full px-4 py-3 bg-gray-50 border ${
                  errors.name ? "border-red-500" : "border-gray-200"
                } rounded-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email *"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`w-full px-4 py-3 bg-gray-50 border ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } rounded-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="url"
                placeholder="Your website"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
                className={`w-full px-4 py-3 bg-gray-50 border ${
                  errors.website ? "border-red-500" : "border-gray-200"
                } rounded-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
              />
              {errors.website && (
                <p className="mt-1 text-sm text-red-500">{errors.website}</p>
              )}
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3 mb-6">
            <input
              type="checkbox"
              id="save-info"
              checked={formData.saveInfo}
              onChange={(e) => handleChange("saveInfo", e.target.checked)}
              className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
            />
            <label htmlFor="save-info" className="text-sm text-gray-600 cursor-pointer">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 bg-gray-900 text-white font-semibold hover:bg-orange-500 transition-colors duration-200 rounded-none ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Posting..." : "Post Comment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeaveAComment;
