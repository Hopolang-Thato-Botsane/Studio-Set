'use client';

import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { CrewProfile as CrewProfileType } from '@/types/auth';
import { initialCrewProfile } from '@/data/userCrew';
import styles from './CrewProfile.module.css';

interface Props {
  onSuccess?: (data: CrewProfileType) => void;
}

export const CrewProfile = ({ onSuccess }: Props) => {
  const [avatarPreview, setAvatarPreview] = useState<string>(
    initialCrewProfile.avatarUrl || ''
  );

  const { register, control, handleSubmit } = useForm<CrewProfileType>({
    defaultValues: initialCrewProfile,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'workHistory',
  });

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
    }
  };

  const onSubmit = (data: CrewProfileType) => {
    const updatedProfile = { ...data, avatarUrl: avatarPreview };
    console.log('Submitted Profile Data (In-Memory):', updatedProfile);
    
    if (onSuccess) {
      onSuccess(updatedProfile);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.avatarColumn}>
        <div className={styles.avatarWrapper}>
          {avatarPreview ? (
            <img src={avatarPreview} alt="Crew Avatar" className={styles.avatarImg} />
          ) : (
            <div className={styles.avatarPlaceholder}>Upload Photo</div>
          )}
          <label htmlFor="avatar-upload" className={styles.uploadOverlay}>
            Change Image
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className={styles.hiddenInput}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.formColumn}>
        <h2 className={styles.sectionTitle}>User Information</h2>

        <div className={styles.grid}>
          <div>
            <label>First Name/s:</label>
            <input {...register('firstName')} className={styles.input} />
          </div>
          <div>
            <label>Last Name:</label>
            <input {...register('lastName')} className={styles.input} />
          </div>
          <div>
            <label>SA ID / Passport Number:</label>
            <input {...register('idOrPassport')} className={styles.input} />
          </div>
          <div>
            <label>Portfolio Website:</label>
            <input {...register('portfolioUrl')} className={styles.input} />
          </div>
        </div>

        <div className={styles.grid}>
          <div>
            <label>Main Department:</label>
            <input {...register('mainDepartment')} className={styles.input} />
          </div>
          <div>
            <label>Department Role:</label>
            <input {...register('departmentRole')} className={styles.input} />
          </div>
          <div>
            <label>Location:</label>
            <input {...register('location')} className={styles.input} />
          </div>
          <div>
            <label>Daily Rate (10 hours):</label>
            <input {...register('dailyRate')} type="number" className={styles.input} />
          </div>
        </div>

        <h3 className={styles.subTitle}>Education</h3>
        <div className={styles.grid}>
          <div>
            <label>Institution:</label>
            <input {...register('institution')} className={styles.input} />
          </div>
          <div>
            <label>Qualification:</label>
            <input {...register('qualification')} className={styles.input} />
          </div>
          <div>
            <label>Year of Completion:</label>
            <input {...register('yearOfCompletion')} className={styles.input} />
          </div>
        </div>

        <h3 className={styles.subTitle}>Billing & Taxes</h3>
        <div className={styles.grid}>
          <div>
            <label>Bank Name:</label>
            <input {...register('bankName')} className={styles.input} />
          </div>
          <div>
            <label>Account Number:</label>
            <input {...register('accountNumber')} className={styles.input} />
          </div>
          <div>
            <label>Branch Code:</label>
            <input {...register('branchCode')} className={styles.input} />
          </div>
          <div>
            <label>TAX Number:</label>
            <input {...register('taxNumber')} className={styles.input} />
          </div>
        </div>

        <h3 className={styles.subTitle}>Portfolio Experience</h3>
        {fields.map((field, index) => (
          <div key={field.id} className={styles.historyRow}>
            <input
              {...register(`workHistory.${index}.studioName`)}
              placeholder="Studio Name"
              className={styles.input}
            />
            <input
              {...register(`workHistory.${index}.role`)}
              placeholder="Role"
              className={styles.input}
            />
            <input
              {...register(`workHistory.${index}.duration`)}
              placeholder="Duration"
              className={styles.input}
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className={styles.removeBtn}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => append({ id: Date.now().toString(), studioName: '', role: '', duration: '' })}
          className={styles.addBtn}
        >
          + Add Past Experience
        </button>

        <h3 className={styles.subTitle}>Showreel</h3>
        <p className={styles.noticeText}>
          A showreel is mandatory for Directors, DPs, Editors, Colorists, VFX, and Stunt Performers.
        </p>
        <input
          {...register('showreelUrl')}
          placeholder="Video Link (Vimeo / YouTube)"
          className={styles.input}
        />

        <button type="submit" className={styles.submitBtn}>
          Create Profile
        </button>
      </form>
    </div>
  );
};